const Joi = require("joi");

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("").optional(),
});

const updateTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string().allow(""),
  completed: Joi.boolean(),
}).min(1);

module.exports = {
  createTaskSchema,
  updateTaskSchema,
};
