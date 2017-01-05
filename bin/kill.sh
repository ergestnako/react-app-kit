if pgrep node
  then 
    kill $(pgrep node)
    echo "stopping prior node processes"
fi
