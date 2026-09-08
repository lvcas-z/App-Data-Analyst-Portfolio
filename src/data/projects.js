export const projects = [
  {
    id: 'adidas', title: 'Adidas Retail', eyebrow: 'Dashboard comercial', year: '2026',
    description: 'Un sistema de lectura semanal para convertir ventas, margen y comportamiento de clientes en decisiones concretas.',
    detail: 'Diseñar una herramienta que permita a los líderes monitorear el rendimiento comercial, detectar desvíos y priorizar acciones rápidamente.',
    tools: ['Power BI', 'SQL', 'DAX'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85', link: 'https://example.com',
    dashboard: [
      { number: '01', title: 'Resumen del negocio', description: 'Vista general de ventas, rentabilidad y desempeño según región y método de venta.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=90' },
      { number: '02', title: 'Productos & Canales', description: 'Comparación de ventas y ganancias según producto y método de venta.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90' },
      { number: '03', title: 'Distribución geográfica', description: 'Análisis de regiones, estados y ciudades con mayor desempeño.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=90' },
    ],
    highlights: [
      { icon: 'store', title: 'In-store', description: 'Principal método de venta por volumen de ventas y generación de ganancia.', value: '$356,64 M en ventas', secondaryValue: '$127,59 M en ganancia' },
      { icon: 'shoe', title: 'Calzado Urbano', description: 'Producto con mejor desempeño, liderando tanto en ventas como en ganancia.', value: '$336,83 M en ventas', secondaryValue: '$127,90 M en ganancia' },
      { icon: 'location', title: 'West', description: 'Región con mayor generación de ganancia dentro del análisis.', value: '$89,61 M en ganancia', secondaryValue: '33,20 % de margen' },
    ],
    conclusion: 'El análisis permitió identificar los principales focos de desempeño comercial y detectar oportunidades para orientar futuras decisiones de negocio.',
    documentation: '/documents/retail-pulse.pdf',
  },]
