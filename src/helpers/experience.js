export const ExperienceFormat = {
  YEAR_AND_MONTH: 'YEAR_AND_MONTH' 
}

export class ExperienceTime {
  YOE = '';

  constructor(startTime, endTime = null) {
    this.YOE = this.getYOE(startTime, endTime);
  }

  getYOE(startTime, endTime) {
    const startDate = new Date(startTime);
    if (!startDate) {
      throw new Error("Invalid start date. Please provide a valid Date object.");
    }

    const currentDate = endTime ? new Date(endTime) : new Date();
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const YOE = Number(timeDifference / (1000 * 60 * 60 * 24 * 365)).toFixed(2);

    return YOE;
  }

  toString(format) {
    const evenYOE = Math.floor(this.YOE);
    const oddYOE = Number(this.YOE - evenYOE).toFixed(2);

    switch(format) {
      case ExperienceFormat.YEAR_AND_MONTH:
        return ExperienceTime.toYearAndMonthYOE(evenYOE, oddYOE);
      default:
        return ExperienceTime.toApproximatelyYOE(evenYOE, oddYOE);
    }
  }

  static toYearAndMonthYOE(evenValue, oddValue) {
    let yearString = '';
    let monthString = '';
    
    if (evenValue) {
      yearString = `${evenValue} year${evenValue > 1 ? 's' : ''}`;
    }

    if (oddValue) {
      const month = Math.ceil(oddValue * 12);
      monthString = `${month} month${month > 1 ? 's' : ''}`;
    }

    return `${yearString} ${yearString && monthString ? 'and ' : ''} ${monthString}`;
  }

  static toApproximatelyYOE(evenValue, oddValue) {
    if (oddValue >= 0.25) {
      return `nearly ${evenValue + 0.5}`;
    } else if (oddValue >= 0.75) {
      return `nearly ${evenValue + 1}`;
    }
    return evenValue;
  }
}
