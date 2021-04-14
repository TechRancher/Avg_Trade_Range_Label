# Average Trading Range, Average Day Range, Volume, Volatility
# Author: TechRancher
# Follow me on github:
# https://github.com/TechRancher
# This code will display the average trading price range over the day,
# it also gives you the then percent of ATR,
# along with the average day range for the day
# with the average percent,
# I added active volume with the volatility of the trade.

# User Input
#hint AverageType: You can choose from many different Averages but be aware that this will also affect how the chart works.
#hint Length: The length of five will be the best to give you the best results.
input AverageType = AverageType.WILDERS;
input length = 5;

# Define Varaibles
def Avg = AverageType;
def lngth = 9;
def Hi = high(period = AggregationPeriod.DAY);
def Lo = low(period = AggregationPeriod.DAY);
def DRngP = Round((Hi - Lo) / Lo * 100, 2);
def ATR = Round(Hi - Lo, 2);
def ADR = MovingAverage(Avg, Hi - Lo, length);
def ADRP = Round(MovingAverage(Avg, DRngP, length), 2);

# Label 
AddLabel(yes, "ATR: $" + ATR + ", Percent: " + DRngP + "%" + " | ADR: $" + round((ADR), 2) + ",  Avg: " + ADRP + "%" + " | Volume: " + Volume + ", Volatility: " + imp_volatility , Color.LIGHT_GRAY);