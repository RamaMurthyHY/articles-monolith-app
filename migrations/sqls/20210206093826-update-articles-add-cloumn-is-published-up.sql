alter table articles add column is_published boolean default false;
alter table articles add column published_at timestamp without time zone;