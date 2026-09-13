export const projects = [
  {
    id: 'adidas', title: 'Adidas Retail', eyebrow: 'Dashboard comercial', year: '2026',
    description: 'Un sistema de lectura semanal para convertir ventas, margen y comportamiento de clientes en decisiones concretas.',
    detail: 'El proyecto tiene como objetivo analizar el desempeño comercial de Adidas en Estados Unidos a partir de sus ventas, ganancias, productos, métodos de venta y distribución geográfica. El análisis busca transformar los datos disponibles en información útil para acompañar la toma de decisiones comerciales y de marketing',
    tools: ['Power BI', 'SQL', 'DAX'], 
    image: '/dashboards/logo-adidas.png', 
    dashboard: [
      { number: '01', title: 'Resumen del negocio', description: 'Vista general de ventas, rentabilidad y desempeño según región y método de venta.', image: '/dashboards/adidas_dashboard_1.png' },
      { number: '02', title: 'Productos & Canales', description: 'Comparación de ventas y ganancias según producto y método de venta.', image: '/dashboards/adidas_dashboard_2.png' },
      { number: '03', title: 'Distribución geográfica', description: 'Análisis de regiones, estados y ciudades con mayor desempeño.', image: '/dashboards/adidas_dashboard_3.png' },
    ],
    highlights: [
      { icon: 'store', title: 'In-store', description: 'Principal método de venta por volumen de ventas y generación de ganancia.', value: '$356,64 M en ventas', secondaryValue: '$127,59 M en ganancia' },
      { icon: 'shoe', title: 'Calzado Urbano', description: 'Producto con mejor desempeño, liderando tanto en ventas como en ganancia.', value: '$336,83 M en ventas', secondaryValue: '$127,90 M en ganancia' },
      { icon: 'location', title: 'West', description: 'Región con mayor generación de ganancia dentro del análisis.', value: '$89,61 M en ganancia', secondaryValue: '33,20 % de margen' },
    ],
    conclusion: 'El análisis permitió identificar los principales focos de desempeño comercial y detectar oportunidades para orientar futuras decisiones de negocio.',
    documentation: '/documentation/ZelayaLucas-ProyectoDataAnalyst-Adidas.pdf',
  },]
