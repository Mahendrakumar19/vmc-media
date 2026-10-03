'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface ModalContextType {
  isModalOpen: boolean
  isCanClose: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCanClose, setIsCanClose] = useState(true)

  const openModal = (preventCloseDelay: boolean = false) => {
    setIsModalOpen(true)
    if (preventCloseDelay) {
      setIsCanClose(false)
      const timer = setTimeout(() => {
        setIsCanClose(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setIsCanClose(true)
    }
  }

  const closeModal = () => {
    if (!isCanClose) return
    setIsModalOpen(false)
  }

  // Auto popup for new visitors
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hasVisited = localStorage.getItem('vmc_visited_user')
    if (!hasVisited) {
      const popupTimer = setTimeout(() => {
        openModal(true)
        localStorage.setItem('vmc_visited_user', 'true')
      }, 1000)
      return () => clearTimeout(popupTimer)
    }
  }, [])

  return (
    <ModalContext.Provider value={{ isModalOpen, isCanClose, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within ModalProvider')
  }
  return context
}

