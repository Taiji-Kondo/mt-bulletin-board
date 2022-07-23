import 'dayjs/locale/ja';

import type { ConfigType, Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isToday from 'dayjs/plugin/isToday';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
dayjs.extend(isToday);
dayjs.extend(relativeTime);

dayjs.locale({ ...ja });

type TemplateType = 'YYYYMMDDHHmmss' | 'YYYY/MM/DD';

export class Day {
  private readonly _day: Dayjs;

  constructor(date?: ConfigType) {
    this._day = dayjs(date);
  }

  public format(template?: TemplateType) {
    return this._day.format(template);
  }
}
