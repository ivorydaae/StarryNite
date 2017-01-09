
# This is the server logic for a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)

#get plot data
allFile <- list.files('Daily_horoscope')

zodiac <- c('Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'
            ,'Capricorn','Aquarius','Pisces')
factor <- c('Love','Finance','Career')

for(i in 1:12 ){
  creatCom <- paste0(zodiac[i],'<-','matrix(0,3,',length(allFile),')')
  eval(parse(text=creatCom))
  setRow <- paste0('rownames(',zodiac[i],')<-factor')
  eval(parse(text=setRow))
  
  colname <- c()
  for( j in 1:length(allFile) ){
    colname[j] <- substr( allFile[j],1,10 ) 
  }
  setCol <-  paste0('colnames(',zodiac[i],')<-colname')
  eval(parse(text=setCol))
}

#set all the data
for(i in 1:length(allFile) ){
  filepath <- paste0( 'Daily_horoscope/',allFile[i] )
  data <- read.csv(filepath)
  for( j in 1:12 ){
    command <- paste0(zodiac[j],'[,i]<-data[,j+1]')
    eval(parse(text=command))
  }
}

#server
shinyServer(function(input, output) {
  
  output$lineChart <- renderPlot({
    which <- input$zodiac
    xname <- "Date"
    yname <- input$factor
    xvalue <- colnames(eval(parse(text=input$zodiac)))
    yvalue <- eval(parse(text=paste0(which,'[\'',yname,'\',]')))
    
    colors <- 'blue'
    plot(NA,ylim=c(0,5),xlim=c(1,length(xvalue)),type = 'b',xlab = 'Date',ylab = yname,xaxt="n")
    points(yvalue,type='b',pch=18,lty='dotted',lwd=1,cex=2,col=colors)
    #lines(yvalue,type='b',col=colors)
    axis(1,labels = xvalue,at=1:length(xvalue))
  })
  
})
