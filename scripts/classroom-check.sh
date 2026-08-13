#!/usr/bin/env bash
# Verificaciones automáticas — Consumo de APIs (fetch / async-await).
# Cada subcomando valida un criterio del ejercicio sobre el código fuente.
set -u

HTML="index.html"
JS="js/index.js"
CSS="css/styles.css"

fail() {
  echo "$1" >&2
  exit 1
}

ok() {
  echo CORRECTO
}

# Devuelve el JS sin líneas que son solo comentarios (evita falsos positivos
# con los comentarios-stub que ya trae la plantilla).
clean_js() {
  grep -v '^\s*//' "$JS"
}

case "${1:-}" in
  link-css-js)
    [[ -f "$HTML" ]] || fail "No se encontró index.html en la raíz del proyecto."
    [[ -f "$CSS" ]]  || fail "No se encontró el archivo css/styles.css."
    [[ -f "$JS" ]]   || fail "No se encontró el archivo js/index.js."
    # Verificar <link> al CSS
    grep -qiE '<link[^>]*href=["'"'"'].*css/styles\.css["'"'"']' "$HTML" \
      || fail "Falta vincular el archivo css/styles.css con una etiqueta <link> en el <head> del HTML."
    # Verificar <script> al JS
    grep -qiE '<script[^>]*src=["'"'"'].*js/index\.js["'"'"']' "$HTML" \
      || fail "Falta vincular el archivo js/index.js con una etiqueta <script> en el HTML."
    ok
    ;;
  fetch-api)
    [[ -f "$JS" ]] || fail "No se encontró el archivo js/index.js."
    js_code="$(clean_js)"
    # Verificar uso de fetch o async/await
    if echo "$js_code" | grep -qiE 'fetch\s*\('; then
      : # ok, usa fetch
    elif echo "$js_code" | grep -qiE 'async.*await'; then
      : # ok, usa async/await
    else
      fail "No se encontró la llamada a la API usando fetch() o async/await en js/index.js."
    fi
    ok
    ;;
  render-user)
    [[ -f "$JS" ]] || fail "No se encontró el archivo js/index.js."
    js_code="$(clean_js)"
    # Verificar selección del contenedor tarjeta
    echo "$js_code" | grep -qiE '(querySelector|getElementsByClassName|getElementById)\s*\(\s*["'"'"'].*tarjeta.*["'"'"']\s*\)' \
      || fail "No se encontró la selección del elemento .tarjeta en el DOM."
    # Verificar manipulación del DOM (innerHTML, appendChild, etc.)
    if echo "$js_code" | grep -qiE '(innerHTML|appendChild|createElement|textContent)'; then
      : # ok
    else
      fail "No se encontró código que inserte o actualice elementos en el DOM dentro de renderizarDatosUsuario."
    fi
    # Verificar acceso a datos de usuario (name, picture, email, first, last)
    if echo "$js_code" | grep -qiE '(picture|name|email|first|last)'; then
      : # ok
    else
      fail "No se encontró acceso a los campos del usuario (picture, name, email) en el código JS."
    fi
    ok
    ;;
  button-random)
    [[ -f "$HTML" ]] || fail "No se encontró index.html."
    [[ -f "$JS" ]]   || fail "No se encontró js/index.js."
    # Verificar que el botón #random está descomentado en index.html
    # Buscar una etiqueta button con id="random" fuera de comentarios HTML <!-- -->
    clean_html="$(sed 's/<!--.*-->//g' "$HTML")"
    echo "$clean_html" | grep -qiE '<button[^>]*id=["'"'"']random["'"'"']' \
      || fail "No se encontró el botón #random descomentado en index.html."
    js_code="$(clean_js)"
    # Verificar la función cargarUsuario o eventListener/onclick
    if echo "$clean_html" | grep -qiE 'onclick\s*=\s*["'"'"']cargarUsuario\s*\(\s*\)["'"'"']'; then
      : # ok, vinculado via onclick en HTML
    elif echo "$js_code" | grep -qiE 'addEventListener\s*\(\s*["'"'"']click["'"'"']'; then
      : # ok, vinculado via addEventListener en JS
    elif echo "$js_code" | grep -qiE 'cargarUsuario\s*\('; then
      : # ok, invoca cargarUsuario
    else
      fail "No se encontró la implementación de cargarUsuario() o la vinculación del evento click al botón #random."
    fi
    ok
    ;;
  *)
    echo "Prueba automática no reconocida. Avisale al docente." >&2
    exit 2
    ;;
esac
