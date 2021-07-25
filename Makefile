dev:
	docker build -t dockernodecanvas:latest .

clean:
	docker container prune -f
	docker volume prune -f
	docker images | grep "^<none>" | awk '{print $$3}' | xargs -n1 docker rmi
