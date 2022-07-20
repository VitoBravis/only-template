## Установка

Запустите установку пакетов npm:

```bash
npm i
```

Для запуска проекта введите:

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

Вы можете начать редактировать страницы, изменив `src/pages/index/index.pug`. Страница сама обновиться по мере редактирования файла.

## Команды

### Страница

Для создания страницы введите (например, `npm run page:create index Главная`):

```bash
npm run page:create <pageName> <pageTitle>
```

Для удаления страницы введите (например, `npm run page:remove index`):

```bash
npm run page:remove <pageName>
```

Чтобы увидеть изменения после создания/удаления страницы требуется перезапустить сборку, выполнив `npm run dev`.

Страницы по умолчанию создаются без файла `scss`. Чтобы создать страницу со стилями, добавьте флаг `-scss`.

```bash
npm run page:create -scss <pageName> <pageTitle>
```

### Компонент

Для создания компонента введите (например, `npm run component:create header common`):

```bash
npm run component:create <componentName> <componentType>
```

Для удаления страницы введите (например, `npm run component:remove header`):

```bash
npm run component:remove <componentName>
```

При создании/удалении компонента перезапускать сборку не требуется, страница сама обновиться по мере редактирования файла.
