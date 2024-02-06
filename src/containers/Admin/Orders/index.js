import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import status from './order-status'
import Row from './row'
import { Container, LinkMenu, Menu } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(null) // Inicializando activeStatus como null
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get('orders')
        setOrders(data)
        setFilteredOrders(data)
      } catch (error) {
        console.error('Error fetching orders:', error)
      }
    }

    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      data: formatDate(order.createdAt),
      status: order.status,
      products: order.products,
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filteredOrders])

  useEffect(() => {
    if (activeStatus !== null && activeStatus !== undefined) {
      if (activeStatus === 0) {
        setFilteredOrders(orders)
      } else {
        const statusItem = status[activeStatus]
        if (statusItem) {
          const newFilteredOrders = orders.filter(
            order => order.status === statusItem.value,
          )
          setFilteredOrders(newFilteredOrders)
        } else {
          console.error('Status not found for activeStatus:', activeStatus)
        }
      }
    }
  }, [orders, activeStatus])

  function handleStatus(selectedStatus) {
    setActiveStatus(selectedStatus)
  }

  return (
    <Container>
      <Menu>
        {status.map(
          (
            statusItem,
            index, // Renomeando a variável para evitar conflito de nomes
          ) => (
            <LinkMenu
              key={statusItem.id}
              onClick={() => handleStatus(index)} // Passando o índice como parâmetro
              isActiveStatus={activeStatus === index} // Verificando se activeStatus é igual ao índice
            >
              {statusItem.label}
            </LinkMenu>
          ),
        )}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>{' '}
              {/* Corrigindo a palavra 'status' para 'Status' */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
