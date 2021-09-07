import React from "react"
import { makeStyles, createTheme, ThemeProvider } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const theme = createTheme({
  typography: {
	fontFamily: [
	  "Faster One",
	  "cursive"
	].join(",")
  }
})

const useStyles = makeStyles(() => ({
  header: {
		display: "flex",
		fontSize: 50,
		textTransform: "uppercase",
		backgroundColor: "#1e2a3b",
		color: "white",
		alingItems: "center",
		justifyContent: "center",
		padding: 20
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
	<ThemeProvider theme={theme}>
	  <Typography className={classes.header}> saa </Typography>
	</ThemeProvider>
  )
}

export default Header	