[
  {
    "essential": true,
    "name": "stock-frontend-container",
    "memory": 128,
    "cpu": 192,
    "image": "${image}",
    "portMappings": [
      { "containerPort": 80, "hostPort": 80 }
    ],
    "environment": [
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "${awslogs_group}",
        "awslogs-region": "${awslogs_region}",
        "awslogs-stream-prefix": "${awslogs_prefix}"
      }
    }
  }
]