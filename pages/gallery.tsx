import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Gallery = () => {
    const cardContents = [
        {
            name: "Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quiLorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi.Nulla enim justo et...",
            img: '/image/gallery1.png'
        },
        {
            name: "Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quiLorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi.Nulla enim justo et...",
            img: '/image/gallery1.png'
        },
        {
            name: "Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quiLorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi.Nulla enim justo et...",
            img: '/image/gallery1.png'
        },
        {
            name: "Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quiLorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi.Nulla enim justo et...",
            img: '/image/gallery1.png'
        },
        {
            name: "Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quiLorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi.Nulla enim justo et...",
            img: '/image/gallery1.png'
        },
        {
            name: "Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quiLorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi.Nulla enim justo et...",
            img: '/image/gallery1.png'
        },
        {
            name: "Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quiLorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi.Nulla enim justo et...",
            img: '/image/gallery1.png'
        },
        {
            name: "Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quiLorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi.Nulla enim justo et...",
            img: '/image/gallery1.png'
        },
    ]
    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={'center'}
                justifyContent={'center'}
                width={'100%'}
            >
                <Box>
                    <img src={'/image/gallery-frame.svg'} alt={'Image'} style={{ width: '98vw', top: 0 }} />
                </Box>

                <Box
                    sx={{ width: '100%', overflowX: 'auto', scrollBehavior: 'smooth', }}>

                    <Stack direction={'row'}
                        sx={{ width: { xs: '800px', md: '100%' }, }} spacing={2}>

                        <Grid container spacing={2} sx={{ px: 2.5, }}>

                            {cardContents.map((card) => {
                                return (
                                    <Grid item xs={3}>
                                        <Card
                                            sx={{
                                                height: { xs: 250, md: 350 },
                                                width: "auto",
                                                backgroundImage: `url('${card.img}')`,
                                                backgroundSize: '60vh auto',
                                                objectFit: 'cover',
                                                backgroundPosition: 'center',
                                                borderRadius: 5,
                                                position: 'relative',
                                                mt: 2
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: '#fff',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    background: ' linear-gradient(0deg, rgba(40, 51, 113, 0.91), rgba(40, 51, 113, 0.91));',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    opacity: 0,
                                                    borderRadius: 3,
                                                    p: 2,
                                                    '&:hover': {
                                                        opacity: 0.8,
                                                    },
                                                    overflowY: 'auto',
                                                    overflowX: 'hidden',
                                                    '&::-webkit-scrollbar': {
                                                        width: '0.01em',
                                                    },
                                                    wordBreak: 'break-all'
                                                }}
                                            >
                                                <Typography variant={'body2'}>
                                                    {card?.name}
                                                </Typography>
                                                <Box
                                                    display={'flex'}
                                                    alignItems={'center'}
                                                    mt={3}
                                                >
                                                    <img alt="Natacha" src={'/icons/instagram.svg'} style={{ height: 20, width: 20 }} />
                                                    <Typography sx={{ ml: 1 }} variant={'body2'}>
                                                        {'@qrew.ae'}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Stack>
                </Box>

                <Box>
                    <img src={'/image/Group 1420.svg'} alt={'Image'} style={{ width: '98vw', top: 0 }} />
                </Box>

            </Box>
        </>
    )
}

export default Gallery