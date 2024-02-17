import { Instagram, WhatsApp, LinkedIn } from '@mui/icons-material'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export function Footers() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f3afbc', // Altere para a cor desejada
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sobre nós
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Somos uma confeitaria gourmet que traz o sabor autêntico da
              tradição caseira em cada mordida. Nossos bolos e doces são feitos
              com ingredientes de alta qualidade e muito amor, para transformar
              cada momento em uma doce celebração.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contate-nos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vila Antonieta, SP
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: juliadaris0706@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Telefone: +55 (11) 96638-9440
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Siga-nos
            </Typography>
            <Link
              href="https://www.linkedin.com/in/julia-daris-a264a7252/"
              color="inherit"
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://www.instagram.com/juliadarisconfeitaria/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5511966389440"
              color="inherit"
            >
              <WhatsApp />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://miguelgiannottii.netlify.app/">
              Julia Cakes
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
