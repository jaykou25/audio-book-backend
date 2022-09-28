"use strict";

const Controller = require("egg").Controller;

function toInt(str) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class EpController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Ep.findAll(query);
  }

  async newEps() {
    const ctx = this.ctx;

    ctx.body = await ctx.model.NewEp.findAll();
  }
}

module.exports = EpController;
