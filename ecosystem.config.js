module.exports = {
  apps: [
    {
      name: "onnuriloan",
      cwd: "/home/bitnami/htdocs",
      script: "./.output/server/index.mjs",
      exec_mode: "cluster",
      instances: "max",
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: "production",
        // MariaDB_HOST: "localhost",
        // MariaDB_PORT:3306,
        // MariaDB_USER:"root",
        // MariaDB_PASSWORD:"",
        // MariaDB_NAME:"DB-Name",
      },
    },
  ],
};
