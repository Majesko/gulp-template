#!/bin/bash
FOLDER="" # remote folder
HOST=""   # remote user@host.com

rsync -av --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r ./dist/ $HOST:$FOLDER --exclude=.DS_Store
