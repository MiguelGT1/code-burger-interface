import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, ButtomStyles, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do Produto'),
    price: Yup.string().required('Digite o preço do Produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed().test('required', 'Carregue um arquivo', value => {
      return value && value.length > 0
    }),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>

        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias"
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <ButtomStyles>Adicionar produto</ButtomStyles>
      </form>
    </Container>
  )
}

export default NewProduct
