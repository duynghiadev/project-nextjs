#!/usr/bin/env sh
echo "Jenkins Deploy"

echo "Deploy by Docker"

# #Pull docker images from docker registry and run
echo $SERVER_USER@$SERVER_URL

chmod 400 $SERVER_SSH_KEY_FILE

ssh -o StrictHostKeyChecking=no -i $SERVER_SSH_KEY_FILE $SERVER_USER@$SERVER_URL "
  docker rm -f portfolio-container
  docker pull hoafngxown/portfolio:latest
  docker run -p 3000:3000 -d --name portfolio-container hoafngxown/portfolio:latest
"

OUT=$?

if [ $OUT -eq 0 ]
then
  echo 'Deploy: Successful'
  exit 0
else
  echo 'Deploy: Failed'
  exit 1
fi