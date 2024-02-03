
import { Box } from '@mui/material'
import MediaControlCard from '../components/Card'
const MainContent = () => {
    return (
        <Box
            sx={
                {
                    display: 'grid', 
                    gridTemplateColumns: {
                        xs:'repeat(1, 1fr)',
                        sm:'repeat(2, 1fr)',
                        md:'repeat(3, 1fr)',
                        lg:'repeat(4, 1fr)'
                    },
                    gap:2, 
                    padding:5

                }
            }
        >
            <MediaControlCard />
            <MediaControlCard />
            <MediaControlCard />
            <MediaControlCard />
            <MediaControlCard />
        </Box>
    )
}

export default MainContent