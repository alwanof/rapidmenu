#!/bin/bash

# My first script

echo "Hello World!"
PID=`ps -eaf | grep node | grep -v grep | awk '{print $2}'`
if [[ "" !=  "$PID" ]]; then
  echo "killing $PID"
  kill -9 $PID
fi
rm -r -f /home/whatsappneed.com/public_html/front/* | rm -r -f /home/whatsappneed.com/public_html/front/.*
