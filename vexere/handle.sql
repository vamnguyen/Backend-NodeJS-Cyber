SET GLOBAL FOREIGN_KEY_CHECKS=0;

SET GLOBAL FOREIGN_KEY_CHECKS=1;

-- get info user
select users.name as userName, users.numberPhone, fromSta.name as fromStation, toSta.name as toStation, trips.price from users
inner join tickets on users.id = tickets.user_id
inner join trips on trips.id = tickets.trip_id
inner join stations as fromSta on fromSta.id = trips.fromStation
inner join stations as toSta on toSta.id = trips.toStation;