
build: build-libs
build: build-frontends

build-libs: build-fake-backend
build-libs: build-microfrontend-react
build-libs: build-webpack-utils

build-frontends: build-checkout
build-frontends: build-inspire
build-frontends: build-product
build-frontends: build-root

build-fake-backend:
	cd libs/fake-backend && \
	npm install && \
	npm run build

build-microfrontend-react:
	cd libs/microfrontend-react && \
	npm install && \
	npm run build

build-webpack-utils:
	cd libs/webpack-utils && \
	npm install && \
	npm run build

build-checkout:
	cd frontends/checkout && \
	npm install && \
	npm run build

build-inspire:
	cd frontends/inspire && \
	npm install && \
	npm run build

build-product:
	cd frontends/product && \
	npm install && \
	npm run build

build-root:
	cd frontends/root && \
	npm install && \
	npm run build

dist:
	rm -rf dist/

	cp -R frontends/root/dist dist/
	cp -R frontends/checkout/dist dist/checkout
	cp -R frontends/inspire/dist dist/inspire
	cp -R frontends/product/dist dist/product
	
