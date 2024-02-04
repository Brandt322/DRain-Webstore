import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export default function MainContent() {

  const array=["https://flagcdn.com/w320/ad.png", "https://flagcdn.com/w320/ru.png","https://flagcdn.com/w320/cz.png", "https://flagcdn.com/w320/ua.png","https://flagcdn.com/w320/ee.png"]
  
  return (
    <Grid container spacing={2}
        sx={{
            width:"100%",
        }}
    >
      <Grid item xs={3}>
        <Link href="/">
          <Avatar
            variant="square"
            src={array[0]}
            sx={{
              width:"100%",
              height:"200px"
            }}
          >
          </Avatar>
        </Link>
      </Grid>
      <Grid item xs={3}>
       <Link>
          <Avatar
            variant="square"
            src={array[1]}
            sx={{
              width:"100%",
              height:"200px"
            }}
          >
          </Avatar>
        </Link>
      </Grid>
      <Grid item xs={6}>
       <Link>
          <Avatar
            variant="square"
            src={array[2]}
            sx={{
              width:"100%",
              height:"200px"
            }}
          >
          </Avatar>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link>
          <Avatar
            variant="square"
            src={array[3]}
            sx={{
              width:"100%",
              height:"200px"
            }}
          >
          </Avatar>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link>
          <Avatar
            variant="square"
            src={array[4]}
            sx={{
              width:"100%",
              height:"200px"
            }}
          >
          </Avatar>
        </Link>
      </Grid>
    </Grid>
  );
}
