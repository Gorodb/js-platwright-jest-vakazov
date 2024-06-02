DOCKER_IMAGE := rvakazov/vakazov-playwright-docker-tests

.PHONY: build
build:
	docker build -t ${DOCKER_IMAGE} .

.PHONY: pull
pull:
	docker pull ${DOCKER_IMAGE}

.PHONY: run
run:
	docker run -it ${DOCKER_IMAGE} npm test
