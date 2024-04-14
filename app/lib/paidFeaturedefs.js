const tableDefs = {
  startingX: 'free',
  startingY: 'free',
  maxTableWidth: 'free',
  tableBoarder: 'free',
  tableBoarderThickness: 'free',
  tableBoarderColor: 'free',
  alternateRowColor: 'free',
  alternateCellColor: 'free',
  dividedX: 'free',
  dividedY: 'free',
  dividedXColor: 'free',
  dividedYColor: 'free',
  dividedXThickness: 'free',
  dividedYThickness: 'free',
  continuationFont: 'free',
  continuationTextX: 'free',
  continuationTextY: 'free',
  continuationFontSize: 'free',
  continuationFillerHeight: 'free',
  continuationText: 'free',
  appendedPageStartX: 'paid',
  appendedPageStartY: 'free',
  appendedMaxTableWidth: 'free',
}


const headerDefs = {
  headerHeight: 'free',
  headerBackgroundColor: 'free',
  headerFont: 'free',
  headerTextSize: 'free',
  headerTextAlignment: 'free',
  headerTextJustification: 'free',
  headerTextColor: 'free',
  headerDividedY: 'free',
  headerDividedYColor: 'free',
  headerDividedXThicknesa: 'free',
  headerDividedX: 'free',
  headerDividedXColor: 'free',
  headerDividedYThickness: 'free',
}

const rowDefs = {
  rowBackgroundColor: 'free',
  alternateRowColor: 'free',
  alternateRowColorValue: 'free',
}

const cellDefs = {
  cellFont: 'free',
  cellTextSize: 'free',
  cellLineHeight: 'free',
  cellTextColor: 'free',
}


const subheading = {
  subHeadingBackgroundColor: 'free',
  subHeadingHeight: 'free',
  subHeadingFont: 'free',
  subHeadingTextColor: 'free',
  subHeadingTextSize: 'free',
  subHeadingLineHeight: 'free',
  subHeadingDividedX: 'free',
  subHeadingDividedXThickness: 'free',
  subHeadingDividedXColor: 'free',
  subHeadingDividedY: 'free',
  subHeadingDividedYThickness: 'free',
  subHeadingDividedYColor: 'free',
}

export function getPaidSettings() {
  const allSttings = {...tableDefs, ...headerDefs, ...roeDefs, ...cellDefs, ...subheadings };
  
  const paidSettings = Object.keys(allSettings)
  .filter(key => key === 'paid')
  .reduce((obj, key) => {
    obj[key] = allSettings[key];
    return obj;
  }, {});

  return paidSettings;
}
