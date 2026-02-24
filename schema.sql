CREATE TABLE IF NOT EXISTS boxeadores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  rating INT NOT NULL,
  activo BOOLEAN NOT NULL
);

INSERT INTO boxeadores (nombre, rating, activo) VALUES
('Ryan Garcia', 87, true),
('Gervonta Davis', 92, true),
('Sergio Maravilla Martinez', 90, false),
('Oleksandr Usyk', 95, true),
('Canelo Alvarez', 94, true);
