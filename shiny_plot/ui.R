
# This is the user-interface definition of a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)

zodiac <- c('Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'
              ,'Capricorn','Aquarius','Pisces')
factor <- c('Love','Finance','Career')

shinyUI(fluidPage(
  
  # Application title
  titlePanel("Daily Horoscope"),

  # Sidebar with a slider input for number of bins
  sidebarLayout(
    sidebarPanel(
      selectInput(
        "zodiac","Choose the zodiac",zodiac
      ),
      selectInput("factor","Select",factor
      )
    ),
    
    # Show a plot of the generated distribution
    mainPanel(
      plotOutput("lineChart")
    )
  )
))
