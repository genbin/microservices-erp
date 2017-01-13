docker-compose stop 
docker rmi -f $(docker images | grep "^<none>" | awk '{print $3}')
docker rm $(docker ps -a -q)
docker-compose rm 
docker-compose up --build nginx
