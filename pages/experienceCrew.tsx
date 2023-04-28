import { Box, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
const ExperienceCrew = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{
                    background: `url('/image/Group 1536 (1).svg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                }}
            >
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={5} mb={3}>
                    <Typography sx={{ fontWeight: 300, fontSize: { lg: "36px", md: "35px", sm: "36px", xs: "32px" }, color: '#fff', textShadow: '0px 0px 5px #D90280' }}>
                        {'EXPERIENCE'}
                        <span style={{ color: '#ED1F98', fontWeight: 500, marginLeft: 8 }}>
                            {'QREW'}
                        </span>
                    </Typography>
                    <Typography variant={'body2'} sx={{ color: '#fff' }}>
                        {'Get a fully immersive 3600 view of QREW'}
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mb={3}>
                        <img src={'/image/Group 1538.svg'} alt={'Image'} style={matches ? { width: '70%', height: '100%', cursor: 'pointer' } : { width: '90%', height: '100%', cursor: 'pointer' }} />
                    </Box>
                    <Typography sx={{ fontWeight: 300, fontSize: { lg: "36px", md: "35px", sm: "36px", xs: "32px" }, color: '#fff', textShadow: '0px 0px 5px #D90280' }}>
                        {'OUR'}
                        <span style={{ color: '#ED1F98', fontWeight: 500, marginLeft: 8 }}>
                            {'GALLERY'}
                        </span>
                    </Typography>
                    <Box display={'flex'} gap={2}>
                        <Box
                            display={'flex'}
                            p={'3px 8px 3px 8px'}
                            alignItems={'center'}
                            bgcolor={'rgba(255, 255, 255, 0.27)'}
                            borderRadius={4}
                        >
                            <img alt="image" src={'/icons/instagram.svg'} style={{ height: 20, width: 20 }} />
                            <Typography sx={{ fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" }, ml: 1, color: '#fff' }}>
                                {'@qrew.ae'}
                            </Typography>
                        </Box>

                        <Box
                            display={'flex'}
                            p={'3px 8px 3px 8px'}
                            alignItems={'center'}
                            bgcolor={'rgba(255, 255, 255, 0.27)'}
                            borderRadius={4}
                        >
                            <img alt="image" src={'/icons/instagram.svg'} style={{ height: 20, width: 20 }} />
                            <Typography sx={{ fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" }, ml: 1, color: '#fff' }}>
                                {'@qrew.ae'}
                            </Typography>
                        </Box>

                        <Box
                            display={'flex'}
                            p={'3px 8px 3px 8px'}
                            alignItems={'center'}
                            bgcolor={'rgba(255, 255, 255, 0.27)'}
                            borderRadius={4}
                        >
                            <img alt="image" src={'/icons/instagram.svg'} style={{ height: 20, width: 20 }} />
                            <Typography sx={{ fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" }, ml: 1, color: '#fff' }}>
                                {'@qrew.ae'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default ExperienceCrew