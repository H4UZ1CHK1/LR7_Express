Philosophy REST API

Сущности
1. Philosophers (`/philosophers`)
- `id`: string (UUID)
- `name`: string
- `birthYear`: number
- `alive`: boolean
- `birthDate`: string (ISO)
- `ideas`: string[]

2. Movements (`/movements`)
- `id`: string (UUID)
- `name`: string
- `foundedYear`: number
- `isActive`: boolean
- `originDate`: string (ISO)
- `keyFigures`: string[]

Установка зависимостей - npm install       
Запуск сервера - npm start         
