#!/bin/sh
set -euxo pipefail


nginx -c /etc/nginx/nginx.conf -g "daemon off;"
