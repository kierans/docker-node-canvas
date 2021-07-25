FROM node:12-alpine3.12

# Add any dependencies required to build modules ie: modules with native code.
RUN apk add --no-cache \
	build-base \
	cairo-dev \
	libpng-dev \
	g++ \
	pango-dev \
	python3 \
	;
