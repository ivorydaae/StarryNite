rm(list=ls(all.names=TRUE))


date <- Sys.Date()

data1Path <- paste0('data/horoscope.com/horoscope.com',date,'.csv')
data1 <- read.csv(data1Path)
data1 <- data1[,2:13]

data2Path <- paste0('data/httpm.click108.com/httpm.click108.com',date,'.csv')
data2 <- read.csv(data2Path)
data2 <- data2[,2:13]

data <- (data1+data2)/2

factor <- c('Love','Finance','Career')
rownames(data) <- factor

filepath <- paste0('Daily_horoscope/',date,'.csv')

write.csv(data,filepath)