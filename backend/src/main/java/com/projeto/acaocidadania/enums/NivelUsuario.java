package com.projeto.acaocidadania.enums;

public enum NivelUsuario {

    ADM(1, "ADM"),
    USU(2, "USU");

    public final Integer id;
    public final String codigo;

    NivelUsuario (int id, String codigo){
        this.id = id;
        this.codigo = codigo;
    }

    static NivelUsuario get(Integer id){
        for (NivelUsuario tipo : values()) {
            if (tipo.id.equals(id))
                return tipo;
        }
        return null;
    }
}
