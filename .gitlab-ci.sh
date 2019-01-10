#!/bin/bash
#/usr/bin/env bash

shopt -s extglob
shopt -s extquote
shopt -s xpg_echo

# set -f

mkdir -vp ./public
cp -vr -t ./public !(public|\.public|\.git|\.\.|\.)

