#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-interactive-1260-f4d7b0ed/tictactoe_interactive
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

