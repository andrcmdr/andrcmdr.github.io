#!/bin/bash
#/usr/bin/env bash

shopt -s globasciiranges
shopt -s globstar
shopt -s extglob
shopt -s extquote
shopt -s xpg_echo

# set -f

mkdir -vp ./public
# cp -vr -t ./public !(public|\.public|\.git|\.\.|\.)
# cp -vr -t ./public !(public|.public|.git|..|.)
# cp -vr -t ./public *(.well-known|.gitlab*)!(public)
cp -vr -t ./public *(.well-known|.gitlab*)!(public|.public|.git|..|.)

