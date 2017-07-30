\connect to_do_list

CREATE TABLE IF NOT EXISTS todo (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  status VARCHAR(255),
  category VARCHAR(255)
);