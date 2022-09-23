"use strict";

const Controller = require("egg").Controller;

function toInt(str) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class TrackController extends Controller {
  async show() {
    const ctx = this.ctx;
    const { id } = this.ctx.params;
    const { limit = 20, current = 1 } = this.ctx.query;
    const _limit = toInt(limit);

    // 页数从1开始
    const _current = toInt(current);
    const offset = (_current - 1) * _limit;

    ctx.body = await ctx.model.Track.findAndCountAll({
      where: { ep_Id: id },
      limit: _limit,
      offset,
    });
  }
}

module.exports = TrackController;
