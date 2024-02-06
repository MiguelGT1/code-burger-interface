import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import ReactSelect from 'react-select'

import { Button } from '../../../components/Button'
import api from '../../../services/api'
import { Container, Label, Input } from './styles'

function NewProduct() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')
    }

    loadOrders()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <input type="text" {...register('name')} />

        <Label>Preço</Label>
        <input type="number" {...register('price')} />

        <Label>Upload da Imagem</Label>
        <input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <Button>Adicionar produto</Button>
      </form>
    </Container>
  )
}

export default NewProduct
