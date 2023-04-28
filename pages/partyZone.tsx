import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import SliderSection from '../components/SliderSection'

const PartyZone = () => {
    return (
        <>
            <Box sx={{ height: { xs: '75vh', sm: 'auto', md: 'auto', lg: 'auto' }, mt: { xs: 10, sm: 0, md: 0, lg: 0 } }}>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    sx={{
                        background: `url('/image//partyzone.svg')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                    }}
                >
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mb={3}>
                        <Typography sx={{ fontWeight: 300, fontSize: '36px', color: '#fff', textShadow: '0px 0px 5px #D90280' }}>
                            {'PARTY'}
                            <span style={{ color: '#ED1F98', fontWeight: 500, marginLeft: 8 }}>
                                {'ZONE'}
                            </span>
                        </Typography>
                        <Typography variant={'body2'} sx={{ color: '#fff', textAlign: 'center' }}>
                            {'Get bombarded with our super vast game type collection'}
                        </Typography>
                    </Box>
                    <Box >
                        {/* <Slider {...settings} >
                        {data.map((img, idx) => (
                            <Box
                                key={idx + 1}
                                sx={idx === imageIndex ?
                                    {
                                        "transform": "scale(1.1)",
                                        "transition": "transform 300ms"
                                    } :
                                    { "transform": "scale(0.8)", "transition": "transform 300ms" }}
                            >
                                <img
                                    src={img.attachment}
                                    alt={img?.attachment}
                                    style={{ "width": 'auto', height: 200, "margin": "0 auto", borderRadius: 10 }} />
                            </Box>
                        ))}
                    </Slider> */}
                        <SliderSection />
                    </Box>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={5} mb={3}>
                        <Button sx={{
                            color: '#000',
                            bgcolor: '#fff',
                            borderRadius: 2,
                            width: { lg: "20%", md: "30%", sm: "30%", xs: "50%" }
                        }}>
                            {'BOOK A PARTY'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PartyZone