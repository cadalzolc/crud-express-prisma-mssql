BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[roles] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(30) CONSTRAINT [roles_name_df] DEFAULT '',
    CONSTRAINT [roles_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [roles_id_key] UNIQUE NONCLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [username] VARCHAR(30),
    [password] VARCHAR(60) CONSTRAINT [users_password_df] DEFAULT '',
    [name] VARCHAR(90) CONSTRAINT [users_name_df] DEFAULT '',
    [role_id] INT NOT NULL CONSTRAINT [users_role_id_df] DEFAULT 1,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_id_key] UNIQUE NONCLUSTERED ([id]),
    CONSTRAINT [Users_username_key] UNIQUE NONCLUSTERED ([username]),
    CONSTRAINT [users_id_role_id_key] UNIQUE NONCLUSTERED ([id],[role_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[users] ADD CONSTRAINT [users_role_id_fkey] FOREIGN KEY ([role_id]) REFERENCES [dbo].[roles]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
