import jalaali from 'jalaali-js';

class JDate {
  static monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

  constructor(date) {
    this._date = date ? new Date(date) : undefined;
  }

  fromJalaali(y, m, d) {
    const { gy, gm, gd } = jalaali.toGregorian(y, m, d);
    this._date = new Date(gy, gm - 1, gd);
    return this;
  }

  startOfJMonth() {
    let dateShamsi = this._date && jalaali.toJalaali(this._date);
    const { gy, gm, gd } = dateShamsi ? jalaali.toGregorian(dateShamsi.jy, dateShamsi.jm, 1) : {};
    this._date = dateShamsi && new Date(gy, gm - 1, gd)
    return this;
  }

  jMonthLength() {
    let dateShamsi = this._date && jalaali.toJalaali(this._date);
    return dateShamsi && jalaali.jalaaliMonthLength(dateShamsi.jy, dateShamsi.jm);
  }

  getDate() {
    return this._date;
  }

  getJalaali() {
    return this._date && jalaali.toJalaali(this._date);
  }

  jYear() {
    return this._date && jalaali.toJalaali(this._date).jy;
  }

  jMonth() {
    return this._date && jalaali.toJalaali(this._date).jm;
  }

  jDay() {
    return this._date && jalaali.toJalaali(this._date).jd;
  }

  jMonthName() {
    let dateShamsi = this._date && jalaali.toJalaali(this._date);
    return dateShamsi && JDate.monthNames[dateShamsi.jm - 1];
  }

  getjDatetimeStr() {
    const { jy, jm, jd } = jalaali.toJalaali(this._date || new Date());
    return `${new Date(this._date).getHours()}:${new Date(this._date).getMinutes()} ${jy}/${jm}/${jd}`
  }
  getjDateStr() {
    const { jy, jm, jd } = jalaali.toJalaali(this._date || new Date());
    return `${jy}-${jm}-${jd}`
  }
  getgDatetimeStr() {
    return `${this._date.getFullYear()}-${("0" + (this._date.getMonth() + 1)).slice(-2)}-${("0" + this._date.getDate()).slice(-2)}`
  }

}

export default JDate;