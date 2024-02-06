import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { Container, Label, Input, ButtomStyles } from './styles'

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
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <Label>Upload da Imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <ButtomStyles>Adicionar produto</ButtomStyles>
      </form>
    </Container>
  )
}

export default NewProduct