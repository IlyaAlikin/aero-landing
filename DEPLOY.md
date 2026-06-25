# Деплой (Docker)

Сайт — статический (`nuxt generate`). В контейнере он собирается в HTML/CSS/JS и
отдаётся через nginx. Node в проде не нужен.

## Локально / на сервере — запуск

```bash
docker compose up -d --build
# сайт на http://<server-ip>/   (порт 80)
```

Обновить после изменений в коде:

```bash
git pull
docker compose up -d --build      # пересобрать образ и перезапустить
```

Посмотреть статус / логи:

```bash
docker compose ps
docker compose logs -f web
```

## Авто-рестарт (если сервак упал/перезагрузился)

В `docker-compose.yml` стоит `restart: unless-stopped`:
- контейнер сам поднимается, если nginx упал;
- и после перезагрузки сервера — при условии, что демон docker включён в автозапуск:

```bash
sudo systemctl enable --now docker
```

`HEALTHCHECK` в `Dockerfile` помечает контейнер unhealthy, если nginx перестал
отвечать (для мониторинга/оркестрации).

## Первичная настройка VDS (Ubuntu 24.04)

```bash
# docker + compose plugin
curl -fsSL https://get.docker.com | sh
sudo systemctl enable --now docker
# (опц.) работать без sudo:
sudo usermod -aG docker $USER   # перелогиниться
```

## HTTPS

Добавляется, когда домен уже указывает A-записью на IP сервера. План: поставить
перед контейнером reverse-proxy с авто-Let's Encrypt (Caddy — проще всего, сам
выпускает и продлевает сертификат), либо nginx + certbot на хосте. Настроим на
шаге реального деплоя.
