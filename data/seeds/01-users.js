const hashedPassword =
  "$2a$14$qHqCbXUImiBOgXlFNX47wuA7uFWNGNAZutYLvOeye9eotewGlfYV6";

exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "dalecooper",
      password: hashedPassword,
      department: "law enforcement",
    },
    {
      username: "deputyhawk",
      password: hashedPassword,
      department: "law enforcement",
    },
    {
      username: "lucymoran",
      password: hashedPassword,
      department: "administration",
    },
  ]);
};
