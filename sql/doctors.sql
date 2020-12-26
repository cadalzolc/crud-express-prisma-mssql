/****** Object:  Table [dbo].[tbdef_doctors]    Script Date: 2020-12-26 09:14:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbdef_doctors](
	[doctor] [varchar](50) NOT NULL,
	[minpat] [int] NULL,
	[timedr] [int] NULL,
	[extrawait] [int] NULL,
	[typew] [tinyint] NULL,
	[iftimedr] [int] NULL,
	[def] [smallint] NULL,
	[ifmess] [tinyint] NULL,
	[message] [text] NULL,
	[drnr] [int] NULL,
	[practice] [varchar](50) NULL,
	[str] [varchar](50) NULL,
	[str1] [varchar](50) NULL,
	[zip] [varchar](12) NULL,
	[city] [varchar](50) NULL,
	[country] [varchar](50) NULL,
	[tel] [varchar](20) NULL,
	[fax] [varchar](20) NULL,
	[cel] [varchar](20) NULL,
	[web] [varchar](50) NULL,
	[inoffice] [tinyint] NULL,
 CONSTRAINT [PK__tbdef_doctors__7C8480AE] PRIMARY KEY CLUSTERED 
(
	[doctor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
